import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8139Component } from './my-comp-8139.component';

describe('MyComp8139Component', () => {
  let component: MyComp8139Component;
  let fixture: ComponentFixture<MyComp8139Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8139Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
