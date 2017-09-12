import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6885Component } from './my-comp-6885.component';

describe('MyComp6885Component', () => {
  let component: MyComp6885Component;
  let fixture: ComponentFixture<MyComp6885Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6885Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6885Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
