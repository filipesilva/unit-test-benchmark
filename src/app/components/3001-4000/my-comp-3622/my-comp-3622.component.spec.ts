import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3622Component } from './my-comp-3622.component';

describe('MyComp3622Component', () => {
  let component: MyComp3622Component;
  let fixture: ComponentFixture<MyComp3622Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3622Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3622Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
