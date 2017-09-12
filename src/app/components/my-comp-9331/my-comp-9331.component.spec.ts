import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9331Component } from './my-comp-9331.component';

describe('MyComp9331Component', () => {
  let component: MyComp9331Component;
  let fixture: ComponentFixture<MyComp9331Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9331Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
