import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4128Component } from './my-comp-4128.component';

describe('MyComp4128Component', () => {
  let component: MyComp4128Component;
  let fixture: ComponentFixture<MyComp4128Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4128Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
