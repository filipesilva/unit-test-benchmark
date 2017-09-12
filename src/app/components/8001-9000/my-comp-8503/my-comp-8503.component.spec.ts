import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8503Component } from './my-comp-8503.component';

describe('MyComp8503Component', () => {
  let component: MyComp8503Component;
  let fixture: ComponentFixture<MyComp8503Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8503Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
