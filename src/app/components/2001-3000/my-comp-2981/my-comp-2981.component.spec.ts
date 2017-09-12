import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2981Component } from './my-comp-2981.component';

describe('MyComp2981Component', () => {
  let component: MyComp2981Component;
  let fixture: ComponentFixture<MyComp2981Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2981Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2981Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
