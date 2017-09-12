import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6770Component } from './my-comp-6770.component';

describe('MyComp6770Component', () => {
  let component: MyComp6770Component;
  let fixture: ComponentFixture<MyComp6770Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6770Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6770Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
