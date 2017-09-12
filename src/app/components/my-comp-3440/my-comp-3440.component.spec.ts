import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3440Component } from './my-comp-3440.component';

describe('MyComp3440Component', () => {
  let component: MyComp3440Component;
  let fixture: ComponentFixture<MyComp3440Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3440Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3440Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
