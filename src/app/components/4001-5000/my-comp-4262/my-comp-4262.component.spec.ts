import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4262Component } from './my-comp-4262.component';

describe('MyComp4262Component', () => {
  let component: MyComp4262Component;
  let fixture: ComponentFixture<MyComp4262Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4262Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
