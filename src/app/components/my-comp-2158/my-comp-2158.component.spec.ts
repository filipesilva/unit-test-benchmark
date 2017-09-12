import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2158Component } from './my-comp-2158.component';

describe('MyComp2158Component', () => {
  let component: MyComp2158Component;
  let fixture: ComponentFixture<MyComp2158Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2158Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
