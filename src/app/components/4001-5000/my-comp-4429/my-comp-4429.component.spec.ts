import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4429Component } from './my-comp-4429.component';

describe('MyComp4429Component', () => {
  let component: MyComp4429Component;
  let fixture: ComponentFixture<MyComp4429Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4429Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
