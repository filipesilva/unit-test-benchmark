import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8213Component } from './my-comp-8213.component';

describe('MyComp8213Component', () => {
  let component: MyComp8213Component;
  let fixture: ComponentFixture<MyComp8213Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8213Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
