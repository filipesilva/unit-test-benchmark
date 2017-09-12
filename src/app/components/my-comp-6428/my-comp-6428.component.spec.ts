import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6428Component } from './my-comp-6428.component';

describe('MyComp6428Component', () => {
  let component: MyComp6428Component;
  let fixture: ComponentFixture<MyComp6428Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6428Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6428Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
