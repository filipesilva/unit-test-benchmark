import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6102Component } from './my-comp-6102.component';

describe('MyComp6102Component', () => {
  let component: MyComp6102Component;
  let fixture: ComponentFixture<MyComp6102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
