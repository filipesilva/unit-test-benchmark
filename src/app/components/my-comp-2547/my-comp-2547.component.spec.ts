import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2547Component } from './my-comp-2547.component';

describe('MyComp2547Component', () => {
  let component: MyComp2547Component;
  let fixture: ComponentFixture<MyComp2547Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2547Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2547Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
