import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp262Component } from './my-comp-262.component';

describe('MyComp262Component', () => {
  let component: MyComp262Component;
  let fixture: ComponentFixture<MyComp262Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp262Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
