import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4025Component } from './my-comp-4025.component';

describe('MyComp4025Component', () => {
  let component: MyComp4025Component;
  let fixture: ComponentFixture<MyComp4025Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4025Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
