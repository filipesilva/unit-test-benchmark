import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2644Component } from './my-comp-2644.component';

describe('MyComp2644Component', () => {
  let component: MyComp2644Component;
  let fixture: ComponentFixture<MyComp2644Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2644Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2644Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
