import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6721Component } from './my-comp-6721.component';

describe('MyComp6721Component', () => {
  let component: MyComp6721Component;
  let fixture: ComponentFixture<MyComp6721Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6721Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6721Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
