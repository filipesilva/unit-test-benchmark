import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8988Component } from './my-comp-8988.component';

describe('MyComp8988Component', () => {
  let component: MyComp8988Component;
  let fixture: ComponentFixture<MyComp8988Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8988Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8988Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
