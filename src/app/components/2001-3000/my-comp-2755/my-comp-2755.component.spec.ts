import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2755Component } from './my-comp-2755.component';

describe('MyComp2755Component', () => {
  let component: MyComp2755Component;
  let fixture: ComponentFixture<MyComp2755Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2755Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2755Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
