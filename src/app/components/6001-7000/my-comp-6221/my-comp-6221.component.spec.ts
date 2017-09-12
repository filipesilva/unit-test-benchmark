import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6221Component } from './my-comp-6221.component';

describe('MyComp6221Component', () => {
  let component: MyComp6221Component;
  let fixture: ComponentFixture<MyComp6221Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6221Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
