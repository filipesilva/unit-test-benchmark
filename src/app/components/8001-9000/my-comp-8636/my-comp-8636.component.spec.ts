import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8636Component } from './my-comp-8636.component';

describe('MyComp8636Component', () => {
  let component: MyComp8636Component;
  let fixture: ComponentFixture<MyComp8636Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8636Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8636Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
