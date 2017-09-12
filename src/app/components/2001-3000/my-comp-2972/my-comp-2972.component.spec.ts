import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2972Component } from './my-comp-2972.component';

describe('MyComp2972Component', () => {
  let component: MyComp2972Component;
  let fixture: ComponentFixture<MyComp2972Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2972Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2972Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
