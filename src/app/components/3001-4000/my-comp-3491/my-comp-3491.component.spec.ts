import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3491Component } from './my-comp-3491.component';

describe('MyComp3491Component', () => {
  let component: MyComp3491Component;
  let fixture: ComponentFixture<MyComp3491Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3491Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
