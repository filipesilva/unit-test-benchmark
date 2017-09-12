import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp977Component } from './my-comp-977.component';

describe('MyComp977Component', () => {
  let component: MyComp977Component;
  let fixture: ComponentFixture<MyComp977Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp977Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp977Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
