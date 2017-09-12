import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8635Component } from './my-comp-8635.component';

describe('MyComp8635Component', () => {
  let component: MyComp8635Component;
  let fixture: ComponentFixture<MyComp8635Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8635Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8635Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
