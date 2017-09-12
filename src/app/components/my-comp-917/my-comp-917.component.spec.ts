import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp917Component } from './my-comp-917.component';

describe('MyComp917Component', () => {
  let component: MyComp917Component;
  let fixture: ComponentFixture<MyComp917Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp917Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp917Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
