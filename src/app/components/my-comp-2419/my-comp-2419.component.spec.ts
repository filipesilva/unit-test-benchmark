import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2419Component } from './my-comp-2419.component';

describe('MyComp2419Component', () => {
  let component: MyComp2419Component;
  let fixture: ComponentFixture<MyComp2419Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2419Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2419Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
