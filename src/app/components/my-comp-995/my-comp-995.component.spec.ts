import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp995Component } from './my-comp-995.component';

describe('MyComp995Component', () => {
  let component: MyComp995Component;
  let fixture: ComponentFixture<MyComp995Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp995Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp995Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
