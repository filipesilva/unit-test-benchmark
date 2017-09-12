import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8542Component } from './my-comp-8542.component';

describe('MyComp8542Component', () => {
  let component: MyComp8542Component;
  let fixture: ComponentFixture<MyComp8542Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8542Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8542Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
