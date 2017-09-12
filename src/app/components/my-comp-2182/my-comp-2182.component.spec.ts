import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2182Component } from './my-comp-2182.component';

describe('MyComp2182Component', () => {
  let component: MyComp2182Component;
  let fixture: ComponentFixture<MyComp2182Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2182Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
