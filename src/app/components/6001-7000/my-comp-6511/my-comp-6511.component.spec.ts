import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6511Component } from './my-comp-6511.component';

describe('MyComp6511Component', () => {
  let component: MyComp6511Component;
  let fixture: ComponentFixture<MyComp6511Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6511Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6511Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
