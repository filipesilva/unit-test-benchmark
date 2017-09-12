import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4809Component } from './my-comp-4809.component';

describe('MyComp4809Component', () => {
  let component: MyComp4809Component;
  let fixture: ComponentFixture<MyComp4809Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4809Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4809Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
