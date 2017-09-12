import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2335Component } from './my-comp-2335.component';

describe('MyComp2335Component', () => {
  let component: MyComp2335Component;
  let fixture: ComponentFixture<MyComp2335Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2335Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2335Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
