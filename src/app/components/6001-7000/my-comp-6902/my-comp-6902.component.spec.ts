import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6902Component } from './my-comp-6902.component';

describe('MyComp6902Component', () => {
  let component: MyComp6902Component;
  let fixture: ComponentFixture<MyComp6902Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6902Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
