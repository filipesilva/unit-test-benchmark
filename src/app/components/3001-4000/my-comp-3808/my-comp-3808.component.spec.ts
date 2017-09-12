import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3808Component } from './my-comp-3808.component';

describe('MyComp3808Component', () => {
  let component: MyComp3808Component;
  let fixture: ComponentFixture<MyComp3808Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3808Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3808Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
