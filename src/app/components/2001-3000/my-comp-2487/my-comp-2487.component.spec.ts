import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2487Component } from './my-comp-2487.component';

describe('MyComp2487Component', () => {
  let component: MyComp2487Component;
  let fixture: ComponentFixture<MyComp2487Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2487Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2487Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
