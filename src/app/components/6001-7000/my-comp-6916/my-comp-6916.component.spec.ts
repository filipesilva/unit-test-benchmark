import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6916Component } from './my-comp-6916.component';

describe('MyComp6916Component', () => {
  let component: MyComp6916Component;
  let fixture: ComponentFixture<MyComp6916Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6916Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6916Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
