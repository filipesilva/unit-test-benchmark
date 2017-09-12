import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6982Component } from './my-comp-6982.component';

describe('MyComp6982Component', () => {
  let component: MyComp6982Component;
  let fixture: ComponentFixture<MyComp6982Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6982Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6982Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
