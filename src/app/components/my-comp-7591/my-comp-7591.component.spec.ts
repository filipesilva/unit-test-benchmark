import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7591Component } from './my-comp-7591.component';

describe('MyComp7591Component', () => {
  let component: MyComp7591Component;
  let fixture: ComponentFixture<MyComp7591Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7591Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7591Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
