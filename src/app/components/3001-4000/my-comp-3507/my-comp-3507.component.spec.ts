import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3507Component } from './my-comp-3507.component';

describe('MyComp3507Component', () => {
  let component: MyComp3507Component;
  let fixture: ComponentFixture<MyComp3507Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3507Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3507Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
