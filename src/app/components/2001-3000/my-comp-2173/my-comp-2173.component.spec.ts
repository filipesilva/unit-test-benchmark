import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2173Component } from './my-comp-2173.component';

describe('MyComp2173Component', () => {
  let component: MyComp2173Component;
  let fixture: ComponentFixture<MyComp2173Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2173Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
