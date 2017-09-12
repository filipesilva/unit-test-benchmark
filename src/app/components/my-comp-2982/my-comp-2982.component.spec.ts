import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2982Component } from './my-comp-2982.component';

describe('MyComp2982Component', () => {
  let component: MyComp2982Component;
  let fixture: ComponentFixture<MyComp2982Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2982Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2982Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
