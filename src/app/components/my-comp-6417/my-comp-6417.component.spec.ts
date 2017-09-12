import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6417Component } from './my-comp-6417.component';

describe('MyComp6417Component', () => {
  let component: MyComp6417Component;
  let fixture: ComponentFixture<MyComp6417Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6417Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6417Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
