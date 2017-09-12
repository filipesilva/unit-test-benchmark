import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7374Component } from './my-comp-7374.component';

describe('MyComp7374Component', () => {
  let component: MyComp7374Component;
  let fixture: ComponentFixture<MyComp7374Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7374Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
