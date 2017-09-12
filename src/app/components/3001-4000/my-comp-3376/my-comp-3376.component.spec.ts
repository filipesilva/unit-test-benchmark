import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3376Component } from './my-comp-3376.component';

describe('MyComp3376Component', () => {
  let component: MyComp3376Component;
  let fixture: ComponentFixture<MyComp3376Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3376Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3376Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
