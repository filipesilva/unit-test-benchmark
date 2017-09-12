import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4093Component } from './my-comp-4093.component';

describe('MyComp4093Component', () => {
  let component: MyComp4093Component;
  let fixture: ComponentFixture<MyComp4093Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4093Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4093Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
