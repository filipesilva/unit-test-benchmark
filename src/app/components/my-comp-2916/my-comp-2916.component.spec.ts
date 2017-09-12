import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2916Component } from './my-comp-2916.component';

describe('MyComp2916Component', () => {
  let component: MyComp2916Component;
  let fixture: ComponentFixture<MyComp2916Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2916Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2916Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
