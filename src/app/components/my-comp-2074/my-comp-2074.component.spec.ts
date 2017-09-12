import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2074Component } from './my-comp-2074.component';

describe('MyComp2074Component', () => {
  let component: MyComp2074Component;
  let fixture: ComponentFixture<MyComp2074Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2074Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2074Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
