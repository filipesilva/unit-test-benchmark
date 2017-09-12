import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6540Component } from './my-comp-6540.component';

describe('MyComp6540Component', () => {
  let component: MyComp6540Component;
  let fixture: ComponentFixture<MyComp6540Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6540Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6540Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
