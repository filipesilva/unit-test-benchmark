import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9056Component } from './my-comp-9056.component';

describe('MyComp9056Component', () => {
  let component: MyComp9056Component;
  let fixture: ComponentFixture<MyComp9056Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9056Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9056Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
