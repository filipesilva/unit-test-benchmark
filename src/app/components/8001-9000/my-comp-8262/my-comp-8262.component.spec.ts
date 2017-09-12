import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8262Component } from './my-comp-8262.component';

describe('MyComp8262Component', () => {
  let component: MyComp8262Component;
  let fixture: ComponentFixture<MyComp8262Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8262Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
