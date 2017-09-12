import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2465Component } from './my-comp-2465.component';

describe('MyComp2465Component', () => {
  let component: MyComp2465Component;
  let fixture: ComponentFixture<MyComp2465Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2465Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2465Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
