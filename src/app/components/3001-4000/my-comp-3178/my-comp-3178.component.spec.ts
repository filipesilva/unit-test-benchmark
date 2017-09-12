import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3178Component } from './my-comp-3178.component';

describe('MyComp3178Component', () => {
  let component: MyComp3178Component;
  let fixture: ComponentFixture<MyComp3178Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3178Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
