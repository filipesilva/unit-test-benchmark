import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8757Component } from './my-comp-8757.component';

describe('MyComp8757Component', () => {
  let component: MyComp8757Component;
  let fixture: ComponentFixture<MyComp8757Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8757Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8757Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
