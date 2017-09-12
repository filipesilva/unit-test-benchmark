import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6112Component } from './my-comp-6112.component';

describe('MyComp6112Component', () => {
  let component: MyComp6112Component;
  let fixture: ComponentFixture<MyComp6112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
