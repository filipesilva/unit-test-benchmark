import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2297Component } from './my-comp-2297.component';

describe('MyComp2297Component', () => {
  let component: MyComp2297Component;
  let fixture: ComponentFixture<MyComp2297Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2297Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2297Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
