import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7189Component } from './my-comp-7189.component';

describe('MyComp7189Component', () => {
  let component: MyComp7189Component;
  let fixture: ComponentFixture<MyComp7189Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7189Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
