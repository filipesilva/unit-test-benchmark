import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6223Component } from './my-comp-6223.component';

describe('MyComp6223Component', () => {
  let component: MyComp6223Component;
  let fixture: ComponentFixture<MyComp6223Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6223Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
