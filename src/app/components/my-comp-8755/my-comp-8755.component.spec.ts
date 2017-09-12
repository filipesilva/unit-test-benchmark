import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8755Component } from './my-comp-8755.component';

describe('MyComp8755Component', () => {
  let component: MyComp8755Component;
  let fixture: ComponentFixture<MyComp8755Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8755Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8755Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
