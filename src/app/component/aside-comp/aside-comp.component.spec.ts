import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideCompComponent } from './aside-comp.component';

describe('AsideCompComponent', () => {
  let component: AsideCompComponent;
  let fixture: ComponentFixture<AsideCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
