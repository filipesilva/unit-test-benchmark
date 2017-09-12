import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5285Component } from './my-comp-5285.component';

describe('MyComp5285Component', () => {
  let component: MyComp5285Component;
  let fixture: ComponentFixture<MyComp5285Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5285Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5285Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
