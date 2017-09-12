import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp657Component } from './my-comp-657.component';

describe('MyComp657Component', () => {
  let component: MyComp657Component;
  let fixture: ComponentFixture<MyComp657Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp657Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp657Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
