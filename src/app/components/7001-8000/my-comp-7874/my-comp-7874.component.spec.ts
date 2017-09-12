import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7874Component } from './my-comp-7874.component';

describe('MyComp7874Component', () => {
  let component: MyComp7874Component;
  let fixture: ComponentFixture<MyComp7874Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7874Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7874Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
