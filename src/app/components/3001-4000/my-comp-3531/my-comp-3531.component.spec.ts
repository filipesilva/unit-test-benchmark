import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3531Component } from './my-comp-3531.component';

describe('MyComp3531Component', () => {
  let component: MyComp3531Component;
  let fixture: ComponentFixture<MyComp3531Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3531Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
