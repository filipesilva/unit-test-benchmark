import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7098Component } from './my-comp-7098.component';

describe('MyComp7098Component', () => {
  let component: MyComp7098Component;
  let fixture: ComponentFixture<MyComp7098Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7098Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7098Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
