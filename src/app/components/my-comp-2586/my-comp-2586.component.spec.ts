import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2586Component } from './my-comp-2586.component';

describe('MyComp2586Component', () => {
  let component: MyComp2586Component;
  let fixture: ComponentFixture<MyComp2586Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2586Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2586Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
