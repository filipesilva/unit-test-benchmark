import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3627Component } from './my-comp-3627.component';

describe('MyComp3627Component', () => {
  let component: MyComp3627Component;
  let fixture: ComponentFixture<MyComp3627Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3627Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3627Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
