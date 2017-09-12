import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8944Component } from './my-comp-8944.component';

describe('MyComp8944Component', () => {
  let component: MyComp8944Component;
  let fixture: ComponentFixture<MyComp8944Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8944Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8944Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
