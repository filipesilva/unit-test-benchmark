import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2989Component } from './my-comp-2989.component';

describe('MyComp2989Component', () => {
  let component: MyComp2989Component;
  let fixture: ComponentFixture<MyComp2989Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2989Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2989Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
