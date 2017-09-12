import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3948Component } from './my-comp-3948.component';

describe('MyComp3948Component', () => {
  let component: MyComp3948Component;
  let fixture: ComponentFixture<MyComp3948Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3948Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3948Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
