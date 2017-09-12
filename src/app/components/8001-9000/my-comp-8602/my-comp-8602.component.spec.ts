import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8602Component } from './my-comp-8602.component';

describe('MyComp8602Component', () => {
  let component: MyComp8602Component;
  let fixture: ComponentFixture<MyComp8602Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8602Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8602Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
