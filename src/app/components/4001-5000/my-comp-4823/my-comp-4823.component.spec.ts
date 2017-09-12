import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4823Component } from './my-comp-4823.component';

describe('MyComp4823Component', () => {
  let component: MyComp4823Component;
  let fixture: ComponentFixture<MyComp4823Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4823Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4823Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
