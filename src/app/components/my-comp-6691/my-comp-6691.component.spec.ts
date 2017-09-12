import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6691Component } from './my-comp-6691.component';

describe('MyComp6691Component', () => {
  let component: MyComp6691Component;
  let fixture: ComponentFixture<MyComp6691Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6691Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6691Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
