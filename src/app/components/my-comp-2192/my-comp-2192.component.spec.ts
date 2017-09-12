import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2192Component } from './my-comp-2192.component';

describe('MyComp2192Component', () => {
  let component: MyComp2192Component;
  let fixture: ComponentFixture<MyComp2192Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2192Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
