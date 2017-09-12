import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7135Component } from './my-comp-7135.component';

describe('MyComp7135Component', () => {
  let component: MyComp7135Component;
  let fixture: ComponentFixture<MyComp7135Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7135Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
