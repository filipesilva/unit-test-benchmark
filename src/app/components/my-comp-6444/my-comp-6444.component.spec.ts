import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6444Component } from './my-comp-6444.component';

describe('MyComp6444Component', () => {
  let component: MyComp6444Component;
  let fixture: ComponentFixture<MyComp6444Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6444Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6444Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
