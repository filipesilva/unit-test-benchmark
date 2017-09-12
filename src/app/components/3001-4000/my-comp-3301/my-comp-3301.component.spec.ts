import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3301Component } from './my-comp-3301.component';

describe('MyComp3301Component', () => {
  let component: MyComp3301Component;
  let fixture: ComponentFixture<MyComp3301Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3301Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
