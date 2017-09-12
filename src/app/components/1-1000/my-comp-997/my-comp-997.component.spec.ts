import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp997Component } from './my-comp-997.component';

describe('MyComp997Component', () => {
  let component: MyComp997Component;
  let fixture: ComponentFixture<MyComp997Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp997Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp997Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
