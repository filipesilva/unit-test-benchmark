import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3435Component } from './my-comp-3435.component';

describe('MyComp3435Component', () => {
  let component: MyComp3435Component;
  let fixture: ComponentFixture<MyComp3435Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3435Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
