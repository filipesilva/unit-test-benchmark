import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2649Component } from './my-comp-2649.component';

describe('MyComp2649Component', () => {
  let component: MyComp2649Component;
  let fixture: ComponentFixture<MyComp2649Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2649Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2649Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
