import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3190Component } from './my-comp-3190.component';

describe('MyComp3190Component', () => {
  let component: MyComp3190Component;
  let fixture: ComponentFixture<MyComp3190Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3190Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
