import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4001Component } from './my-comp-4001.component';

describe('MyComp4001Component', () => {
  let component: MyComp4001Component;
  let fixture: ComponentFixture<MyComp4001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
