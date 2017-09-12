import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2433Component } from './my-comp-2433.component';

describe('MyComp2433Component', () => {
  let component: MyComp2433Component;
  let fixture: ComponentFixture<MyComp2433Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2433Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
