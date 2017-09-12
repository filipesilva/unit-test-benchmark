import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3275Component } from './my-comp-3275.component';

describe('MyComp3275Component', () => {
  let component: MyComp3275Component;
  let fixture: ComponentFixture<MyComp3275Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3275Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
