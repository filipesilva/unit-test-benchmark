import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4113Component } from './my-comp-4113.component';

describe('MyComp4113Component', () => {
  let component: MyComp4113Component;
  let fixture: ComponentFixture<MyComp4113Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4113Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
