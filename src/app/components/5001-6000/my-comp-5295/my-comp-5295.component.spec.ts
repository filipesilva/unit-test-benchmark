import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5295Component } from './my-comp-5295.component';

describe('MyComp5295Component', () => {
  let component: MyComp5295Component;
  let fixture: ComponentFixture<MyComp5295Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5295Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5295Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
