import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6709Component } from './my-comp-6709.component';

describe('MyComp6709Component', () => {
  let component: MyComp6709Component;
  let fixture: ComponentFixture<MyComp6709Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6709Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6709Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
