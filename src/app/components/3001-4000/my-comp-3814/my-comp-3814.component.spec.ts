import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3814Component } from './my-comp-3814.component';

describe('MyComp3814Component', () => {
  let component: MyComp3814Component;
  let fixture: ComponentFixture<MyComp3814Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3814Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3814Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
