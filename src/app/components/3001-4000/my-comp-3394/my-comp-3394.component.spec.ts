import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3394Component } from './my-comp-3394.component';

describe('MyComp3394Component', () => {
  let component: MyComp3394Component;
  let fixture: ComponentFixture<MyComp3394Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3394Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
