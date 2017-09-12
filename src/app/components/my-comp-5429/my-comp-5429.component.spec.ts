import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5429Component } from './my-comp-5429.component';

describe('MyComp5429Component', () => {
  let component: MyComp5429Component;
  let fixture: ComponentFixture<MyComp5429Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5429Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
