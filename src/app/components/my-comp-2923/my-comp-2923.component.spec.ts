import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2923Component } from './my-comp-2923.component';

describe('MyComp2923Component', () => {
  let component: MyComp2923Component;
  let fixture: ComponentFixture<MyComp2923Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2923Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2923Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
