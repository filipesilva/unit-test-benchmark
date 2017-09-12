import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9967Component } from './my-comp-9967.component';

describe('MyComp9967Component', () => {
  let component: MyComp9967Component;
  let fixture: ComponentFixture<MyComp9967Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9967Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9967Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
