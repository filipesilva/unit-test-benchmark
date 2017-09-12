import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7890Component } from './my-comp-7890.component';

describe('MyComp7890Component', () => {
  let component: MyComp7890Component;
  let fixture: ComponentFixture<MyComp7890Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7890Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7890Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
