import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8374Component } from './my-comp-8374.component';

describe('MyComp8374Component', () => {
  let component: MyComp8374Component;
  let fixture: ComponentFixture<MyComp8374Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8374Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
