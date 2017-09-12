import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3503Component } from './my-comp-3503.component';

describe('MyComp3503Component', () => {
  let component: MyComp3503Component;
  let fixture: ComponentFixture<MyComp3503Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3503Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
