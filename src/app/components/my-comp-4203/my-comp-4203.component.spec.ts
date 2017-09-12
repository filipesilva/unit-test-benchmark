import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4203Component } from './my-comp-4203.component';

describe('MyComp4203Component', () => {
  let component: MyComp4203Component;
  let fixture: ComponentFixture<MyComp4203Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4203Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
