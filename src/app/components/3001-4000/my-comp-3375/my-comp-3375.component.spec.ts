import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3375Component } from './my-comp-3375.component';

describe('MyComp3375Component', () => {
  let component: MyComp3375Component;
  let fixture: ComponentFixture<MyComp3375Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3375Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3375Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
