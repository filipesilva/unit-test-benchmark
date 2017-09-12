import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp755Component } from './my-comp-755.component';

describe('MyComp755Component', () => {
  let component: MyComp755Component;
  let fixture: ComponentFixture<MyComp755Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp755Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp755Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
