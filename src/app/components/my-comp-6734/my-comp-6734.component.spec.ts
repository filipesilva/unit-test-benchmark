import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6734Component } from './my-comp-6734.component';

describe('MyComp6734Component', () => {
  let component: MyComp6734Component;
  let fixture: ComponentFixture<MyComp6734Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6734Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6734Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
