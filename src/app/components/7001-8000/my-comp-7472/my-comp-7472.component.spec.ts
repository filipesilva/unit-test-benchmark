import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7472Component } from './my-comp-7472.component';

describe('MyComp7472Component', () => {
  let component: MyComp7472Component;
  let fixture: ComponentFixture<MyComp7472Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7472Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7472Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
