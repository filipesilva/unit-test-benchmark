import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3584Component } from './my-comp-3584.component';

describe('MyComp3584Component', () => {
  let component: MyComp3584Component;
  let fixture: ComponentFixture<MyComp3584Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3584Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3584Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
