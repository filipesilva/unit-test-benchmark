import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6603Component } from './my-comp-6603.component';

describe('MyComp6603Component', () => {
  let component: MyComp6603Component;
  let fixture: ComponentFixture<MyComp6603Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6603Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6603Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
