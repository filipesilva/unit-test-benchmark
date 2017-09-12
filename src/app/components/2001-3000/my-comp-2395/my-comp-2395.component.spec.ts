import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2395Component } from './my-comp-2395.component';

describe('MyComp2395Component', () => {
  let component: MyComp2395Component;
  let fixture: ComponentFixture<MyComp2395Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2395Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
