import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp830Component } from './my-comp-830.component';

describe('MyComp830Component', () => {
  let component: MyComp830Component;
  let fixture: ComponentFixture<MyComp830Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp830Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp830Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
