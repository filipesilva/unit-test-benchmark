import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8608Component } from './my-comp-8608.component';

describe('MyComp8608Component', () => {
  let component: MyComp8608Component;
  let fixture: ComponentFixture<MyComp8608Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8608Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8608Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
