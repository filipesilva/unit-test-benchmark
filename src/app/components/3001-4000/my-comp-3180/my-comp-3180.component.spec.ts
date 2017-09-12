import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3180Component } from './my-comp-3180.component';

describe('MyComp3180Component', () => {
  let component: MyComp3180Component;
  let fixture: ComponentFixture<MyComp3180Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3180Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
