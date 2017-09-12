import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2186Component } from './my-comp-2186.component';

describe('MyComp2186Component', () => {
  let component: MyComp2186Component;
  let fixture: ComponentFixture<MyComp2186Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2186Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
