import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2890Component } from './my-comp-2890.component';

describe('MyComp2890Component', () => {
  let component: MyComp2890Component;
  let fixture: ComponentFixture<MyComp2890Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2890Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2890Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
