import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9207Component } from './my-comp-9207.component';

describe('MyComp9207Component', () => {
  let component: MyComp9207Component;
  let fixture: ComponentFixture<MyComp9207Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9207Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
