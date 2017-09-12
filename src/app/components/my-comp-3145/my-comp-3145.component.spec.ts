import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3145Component } from './my-comp-3145.component';

describe('MyComp3145Component', () => {
  let component: MyComp3145Component;
  let fixture: ComponentFixture<MyComp3145Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3145Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
