import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7707Component } from './my-comp-7707.component';

describe('MyComp7707Component', () => {
  let component: MyComp7707Component;
  let fixture: ComponentFixture<MyComp7707Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7707Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
