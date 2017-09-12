import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7432Component } from './my-comp-7432.component';

describe('MyComp7432Component', () => {
  let component: MyComp7432Component;
  let fixture: ComponentFixture<MyComp7432Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7432Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7432Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
