import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1923Component } from './my-comp-1923.component';

describe('MyComp1923Component', () => {
  let component: MyComp1923Component;
  let fixture: ComponentFixture<MyComp1923Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1923Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1923Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
