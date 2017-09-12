import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6576Component } from './my-comp-6576.component';

describe('MyComp6576Component', () => {
  let component: MyComp6576Component;
  let fixture: ComponentFixture<MyComp6576Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6576Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6576Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
