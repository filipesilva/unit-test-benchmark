import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8106Component } from './my-comp-8106.component';

describe('MyComp8106Component', () => {
  let component: MyComp8106Component;
  let fixture: ComponentFixture<MyComp8106Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8106Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
