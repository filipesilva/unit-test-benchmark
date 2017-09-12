import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5850Component } from './my-comp-5850.component';

describe('MyComp5850Component', () => {
  let component: MyComp5850Component;
  let fixture: ComponentFixture<MyComp5850Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5850Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5850Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
