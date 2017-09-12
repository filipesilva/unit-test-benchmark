import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2700Component } from './my-comp-2700.component';

describe('MyComp2700Component', () => {
  let component: MyComp2700Component;
  let fixture: ComponentFixture<MyComp2700Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2700Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
