import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3410Component } from './my-comp-3410.component';

describe('MyComp3410Component', () => {
  let component: MyComp3410Component;
  let fixture: ComponentFixture<MyComp3410Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3410Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
