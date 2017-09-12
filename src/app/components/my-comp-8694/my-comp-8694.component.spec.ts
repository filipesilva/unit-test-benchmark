import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8694Component } from './my-comp-8694.component';

describe('MyComp8694Component', () => {
  let component: MyComp8694Component;
  let fixture: ComponentFixture<MyComp8694Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8694Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8694Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
