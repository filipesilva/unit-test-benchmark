import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8192Component } from './my-comp-8192.component';

describe('MyComp8192Component', () => {
  let component: MyComp8192Component;
  let fixture: ComponentFixture<MyComp8192Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8192Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
