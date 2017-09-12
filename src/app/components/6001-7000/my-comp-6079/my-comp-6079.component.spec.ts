import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6079Component } from './my-comp-6079.component';

describe('MyComp6079Component', () => {
  let component: MyComp6079Component;
  let fixture: ComponentFixture<MyComp6079Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6079Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6079Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
