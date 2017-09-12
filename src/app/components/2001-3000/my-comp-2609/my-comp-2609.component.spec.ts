import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2609Component } from './my-comp-2609.component';

describe('MyComp2609Component', () => {
  let component: MyComp2609Component;
  let fixture: ComponentFixture<MyComp2609Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2609Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2609Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
