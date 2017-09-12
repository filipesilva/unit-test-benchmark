import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6999Component } from './my-comp-6999.component';

describe('MyComp6999Component', () => {
  let component: MyComp6999Component;
  let fixture: ComponentFixture<MyComp6999Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6999Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6999Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
