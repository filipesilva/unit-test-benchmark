import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7070Component } from './my-comp-7070.component';

describe('MyComp7070Component', () => {
  let component: MyComp7070Component;
  let fixture: ComponentFixture<MyComp7070Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7070Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7070Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
