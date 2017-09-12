import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2339Component } from './my-comp-2339.component';

describe('MyComp2339Component', () => {
  let component: MyComp2339Component;
  let fixture: ComponentFixture<MyComp2339Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2339Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2339Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
