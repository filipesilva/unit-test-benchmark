import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3929Component } from './my-comp-3929.component';

describe('MyComp3929Component', () => {
  let component: MyComp3929Component;
  let fixture: ComponentFixture<MyComp3929Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3929Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3929Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
