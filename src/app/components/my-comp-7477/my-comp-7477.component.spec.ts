import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7477Component } from './my-comp-7477.component';

describe('MyComp7477Component', () => {
  let component: MyComp7477Component;
  let fixture: ComponentFixture<MyComp7477Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7477Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7477Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
