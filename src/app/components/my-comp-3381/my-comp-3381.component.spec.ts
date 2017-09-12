import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3381Component } from './my-comp-3381.component';

describe('MyComp3381Component', () => {
  let component: MyComp3381Component;
  let fixture: ComponentFixture<MyComp3381Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3381Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
