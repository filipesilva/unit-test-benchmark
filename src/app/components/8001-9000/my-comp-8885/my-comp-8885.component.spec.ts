import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8885Component } from './my-comp-8885.component';

describe('MyComp8885Component', () => {
  let component: MyComp8885Component;
  let fixture: ComponentFixture<MyComp8885Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8885Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8885Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
