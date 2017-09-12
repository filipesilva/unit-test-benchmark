import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3709Component } from './my-comp-3709.component';

describe('MyComp3709Component', () => {
  let component: MyComp3709Component;
  let fixture: ComponentFixture<MyComp3709Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3709Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3709Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
