import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8766Component } from './my-comp-8766.component';

describe('MyComp8766Component', () => {
  let component: MyComp8766Component;
  let fixture: ComponentFixture<MyComp8766Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8766Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8766Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
