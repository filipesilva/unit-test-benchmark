import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4996Component } from './my-comp-4996.component';

describe('MyComp4996Component', () => {
  let component: MyComp4996Component;
  let fixture: ComponentFixture<MyComp4996Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4996Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4996Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
