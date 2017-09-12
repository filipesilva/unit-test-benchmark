import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4815Component } from './my-comp-4815.component';

describe('MyComp4815Component', () => {
  let component: MyComp4815Component;
  let fixture: ComponentFixture<MyComp4815Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4815Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4815Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
