import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9421Component } from './my-comp-9421.component';

describe('MyComp9421Component', () => {
  let component: MyComp9421Component;
  let fixture: ComponentFixture<MyComp9421Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9421Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9421Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
