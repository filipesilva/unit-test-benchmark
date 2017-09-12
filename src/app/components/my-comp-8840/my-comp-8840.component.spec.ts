import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8840Component } from './my-comp-8840.component';

describe('MyComp8840Component', () => {
  let component: MyComp8840Component;
  let fixture: ComponentFixture<MyComp8840Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8840Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8840Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
