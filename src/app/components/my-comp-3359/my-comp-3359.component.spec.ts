import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3359Component } from './my-comp-3359.component';

describe('MyComp3359Component', () => {
  let component: MyComp3359Component;
  let fixture: ComponentFixture<MyComp3359Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3359Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
