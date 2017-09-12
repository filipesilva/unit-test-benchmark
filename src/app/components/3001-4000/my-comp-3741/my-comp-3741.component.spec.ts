import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3741Component } from './my-comp-3741.component';

describe('MyComp3741Component', () => {
  let component: MyComp3741Component;
  let fixture: ComponentFixture<MyComp3741Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3741Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3741Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
