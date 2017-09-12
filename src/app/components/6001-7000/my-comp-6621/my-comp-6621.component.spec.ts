import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6621Component } from './my-comp-6621.component';

describe('MyComp6621Component', () => {
  let component: MyComp6621Component;
  let fixture: ComponentFixture<MyComp6621Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6621Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6621Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
