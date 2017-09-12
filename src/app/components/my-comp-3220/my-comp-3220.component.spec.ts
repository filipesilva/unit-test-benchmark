import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3220Component } from './my-comp-3220.component';

describe('MyComp3220Component', () => {
  let component: MyComp3220Component;
  let fixture: ComponentFixture<MyComp3220Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3220Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
