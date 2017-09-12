import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7878Component } from './my-comp-7878.component';

describe('MyComp7878Component', () => {
  let component: MyComp7878Component;
  let fixture: ComponentFixture<MyComp7878Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7878Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7878Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
