import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3200Component } from './my-comp-3200.component';

describe('MyComp3200Component', () => {
  let component: MyComp3200Component;
  let fixture: ComponentFixture<MyComp3200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
