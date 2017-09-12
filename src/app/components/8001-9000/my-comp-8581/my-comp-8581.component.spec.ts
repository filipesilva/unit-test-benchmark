import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8581Component } from './my-comp-8581.component';

describe('MyComp8581Component', () => {
  let component: MyComp8581Component;
  let fixture: ComponentFixture<MyComp8581Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8581Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8581Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
