import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2660Component } from './my-comp-2660.component';

describe('MyComp2660Component', () => {
  let component: MyComp2660Component;
  let fixture: ComponentFixture<MyComp2660Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2660Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2660Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
