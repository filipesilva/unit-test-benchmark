import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7621Component } from './my-comp-7621.component';

describe('MyComp7621Component', () => {
  let component: MyComp7621Component;
  let fixture: ComponentFixture<MyComp7621Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7621Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7621Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
