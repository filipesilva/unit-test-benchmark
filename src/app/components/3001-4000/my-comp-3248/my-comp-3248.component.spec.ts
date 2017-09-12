import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3248Component } from './my-comp-3248.component';

describe('MyComp3248Component', () => {
  let component: MyComp3248Component;
  let fixture: ComponentFixture<MyComp3248Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3248Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
