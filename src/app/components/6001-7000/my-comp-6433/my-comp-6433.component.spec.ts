import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6433Component } from './my-comp-6433.component';

describe('MyComp6433Component', () => {
  let component: MyComp6433Component;
  let fixture: ComponentFixture<MyComp6433Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6433Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
