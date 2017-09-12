import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7982Component } from './my-comp-7982.component';

describe('MyComp7982Component', () => {
  let component: MyComp7982Component;
  let fixture: ComponentFixture<MyComp7982Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7982Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7982Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
