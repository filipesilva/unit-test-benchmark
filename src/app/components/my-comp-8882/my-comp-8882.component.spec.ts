import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8882Component } from './my-comp-8882.component';

describe('MyComp8882Component', () => {
  let component: MyComp8882Component;
  let fixture: ComponentFixture<MyComp8882Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8882Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8882Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
