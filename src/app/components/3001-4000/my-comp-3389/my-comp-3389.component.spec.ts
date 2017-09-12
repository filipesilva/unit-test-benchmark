import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3389Component } from './my-comp-3389.component';

describe('MyComp3389Component', () => {
  let component: MyComp3389Component;
  let fixture: ComponentFixture<MyComp3389Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3389Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3389Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
