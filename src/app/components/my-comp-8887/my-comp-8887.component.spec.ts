import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8887Component } from './my-comp-8887.component';

describe('MyComp8887Component', () => {
  let component: MyComp8887Component;
  let fixture: ComponentFixture<MyComp8887Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8887Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8887Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
