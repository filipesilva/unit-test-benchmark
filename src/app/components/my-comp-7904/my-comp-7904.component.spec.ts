import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7904Component } from './my-comp-7904.component';

describe('MyComp7904Component', () => {
  let component: MyComp7904Component;
  let fixture: ComponentFixture<MyComp7904Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7904Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7904Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
