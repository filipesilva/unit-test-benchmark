import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp648Component } from './my-comp-648.component';

describe('MyComp648Component', () => {
  let component: MyComp648Component;
  let fixture: ComponentFixture<MyComp648Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp648Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp648Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
