import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8652Component } from './my-comp-8652.component';

describe('MyComp8652Component', () => {
  let component: MyComp8652Component;
  let fixture: ComponentFixture<MyComp8652Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8652Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8652Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
