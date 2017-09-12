import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8609Component } from './my-comp-8609.component';

describe('MyComp8609Component', () => {
  let component: MyComp8609Component;
  let fixture: ComponentFixture<MyComp8609Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8609Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8609Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
