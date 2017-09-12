import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8271Component } from './my-comp-8271.component';

describe('MyComp8271Component', () => {
  let component: MyComp8271Component;
  let fixture: ComponentFixture<MyComp8271Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8271Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
