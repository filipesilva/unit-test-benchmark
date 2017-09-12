import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4248Component } from './my-comp-4248.component';

describe('MyComp4248Component', () => {
  let component: MyComp4248Component;
  let fixture: ComponentFixture<MyComp4248Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4248Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
