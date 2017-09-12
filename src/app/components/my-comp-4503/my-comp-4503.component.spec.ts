import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4503Component } from './my-comp-4503.component';

describe('MyComp4503Component', () => {
  let component: MyComp4503Component;
  let fixture: ComponentFixture<MyComp4503Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4503Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
