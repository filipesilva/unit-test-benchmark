import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7336Component } from './my-comp-7336.component';

describe('MyComp7336Component', () => {
  let component: MyComp7336Component;
  let fixture: ComponentFixture<MyComp7336Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7336Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7336Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
