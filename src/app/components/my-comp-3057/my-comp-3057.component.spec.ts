import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3057Component } from './my-comp-3057.component';

describe('MyComp3057Component', () => {
  let component: MyComp3057Component;
  let fixture: ComponentFixture<MyComp3057Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3057Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3057Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
