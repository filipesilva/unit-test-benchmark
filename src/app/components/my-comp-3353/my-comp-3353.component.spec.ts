import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3353Component } from './my-comp-3353.component';

describe('MyComp3353Component', () => {
  let component: MyComp3353Component;
  let fixture: ComponentFixture<MyComp3353Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3353Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
