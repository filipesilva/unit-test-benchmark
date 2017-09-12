import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4936Component } from './my-comp-4936.component';

describe('MyComp4936Component', () => {
  let component: MyComp4936Component;
  let fixture: ComponentFixture<MyComp4936Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4936Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4936Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
