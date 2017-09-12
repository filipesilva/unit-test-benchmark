import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2687Component } from './my-comp-2687.component';

describe('MyComp2687Component', () => {
  let component: MyComp2687Component;
  let fixture: ComponentFixture<MyComp2687Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2687Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2687Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
