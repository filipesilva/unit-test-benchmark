import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3398Component } from './my-comp-3398.component';

describe('MyComp3398Component', () => {
  let component: MyComp3398Component;
  let fixture: ComponentFixture<MyComp3398Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3398Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
