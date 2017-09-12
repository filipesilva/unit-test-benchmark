import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp285Component } from './my-comp-285.component';

describe('MyComp285Component', () => {
  let component: MyComp285Component;
  let fixture: ComponentFixture<MyComp285Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp285Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp285Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
