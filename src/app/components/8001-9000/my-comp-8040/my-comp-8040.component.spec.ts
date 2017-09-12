import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8040Component } from './my-comp-8040.component';

describe('MyComp8040Component', () => {
  let component: MyComp8040Component;
  let fixture: ComponentFixture<MyComp8040Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8040Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8040Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
