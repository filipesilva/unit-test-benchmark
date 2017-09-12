import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4956Component } from './my-comp-4956.component';

describe('MyComp4956Component', () => {
  let component: MyComp4956Component;
  let fixture: ComponentFixture<MyComp4956Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4956Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4956Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
