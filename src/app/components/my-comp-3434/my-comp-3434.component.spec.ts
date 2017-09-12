import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3434Component } from './my-comp-3434.component';

describe('MyComp3434Component', () => {
  let component: MyComp3434Component;
  let fixture: ComponentFixture<MyComp3434Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3434Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3434Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
