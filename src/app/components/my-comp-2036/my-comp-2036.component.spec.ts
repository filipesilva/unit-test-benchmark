import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2036Component } from './my-comp-2036.component';

describe('MyComp2036Component', () => {
  let component: MyComp2036Component;
  let fixture: ComponentFixture<MyComp2036Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2036Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2036Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
