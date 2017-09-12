import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3031Component } from './my-comp-3031.component';

describe('MyComp3031Component', () => {
  let component: MyComp3031Component;
  let fixture: ComponentFixture<MyComp3031Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3031Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3031Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
