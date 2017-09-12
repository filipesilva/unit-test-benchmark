import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2587Component } from './my-comp-2587.component';

describe('MyComp2587Component', () => {
  let component: MyComp2587Component;
  let fixture: ComponentFixture<MyComp2587Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2587Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2587Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
