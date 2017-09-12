import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8023Component } from './my-comp-8023.component';

describe('MyComp8023Component', () => {
  let component: MyComp8023Component;
  let fixture: ComponentFixture<MyComp8023Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8023Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
