import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2762Component } from './my-comp-2762.component';

describe('MyComp2762Component', () => {
  let component: MyComp2762Component;
  let fixture: ComponentFixture<MyComp2762Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2762Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2762Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
