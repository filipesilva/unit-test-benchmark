import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7023Component } from './my-comp-7023.component';

describe('MyComp7023Component', () => {
  let component: MyComp7023Component;
  let fixture: ComponentFixture<MyComp7023Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7023Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
