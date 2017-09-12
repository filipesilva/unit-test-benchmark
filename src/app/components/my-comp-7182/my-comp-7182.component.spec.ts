import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7182Component } from './my-comp-7182.component';

describe('MyComp7182Component', () => {
  let component: MyComp7182Component;
  let fixture: ComponentFixture<MyComp7182Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7182Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
