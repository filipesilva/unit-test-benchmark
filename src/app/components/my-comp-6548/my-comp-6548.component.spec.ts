import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6548Component } from './my-comp-6548.component';

describe('MyComp6548Component', () => {
  let component: MyComp6548Component;
  let fixture: ComponentFixture<MyComp6548Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6548Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6548Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
