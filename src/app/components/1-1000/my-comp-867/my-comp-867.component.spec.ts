import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp867Component } from './my-comp-867.component';

describe('MyComp867Component', () => {
  let component: MyComp867Component;
  let fixture: ComponentFixture<MyComp867Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp867Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp867Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
