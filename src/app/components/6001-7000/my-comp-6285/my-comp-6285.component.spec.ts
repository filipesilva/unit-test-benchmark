import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6285Component } from './my-comp-6285.component';

describe('MyComp6285Component', () => {
  let component: MyComp6285Component;
  let fixture: ComponentFixture<MyComp6285Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6285Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6285Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
