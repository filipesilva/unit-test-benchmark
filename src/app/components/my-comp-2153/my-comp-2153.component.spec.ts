import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2153Component } from './my-comp-2153.component';

describe('MyComp2153Component', () => {
  let component: MyComp2153Component;
  let fixture: ComponentFixture<MyComp2153Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2153Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
