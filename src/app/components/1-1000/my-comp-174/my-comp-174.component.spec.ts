import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp174Component } from './my-comp-174.component';

describe('MyComp174Component', () => {
  let component: MyComp174Component;
  let fixture: ComponentFixture<MyComp174Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp174Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
