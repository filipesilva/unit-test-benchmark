import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3759Component } from './my-comp-3759.component';

describe('MyComp3759Component', () => {
  let component: MyComp3759Component;
  let fixture: ComponentFixture<MyComp3759Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3759Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3759Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
