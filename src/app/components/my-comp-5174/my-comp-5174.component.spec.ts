import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5174Component } from './my-comp-5174.component';

describe('MyComp5174Component', () => {
  let component: MyComp5174Component;
  let fixture: ComponentFixture<MyComp5174Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5174Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
