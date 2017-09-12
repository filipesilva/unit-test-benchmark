import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3535Component } from './my-comp-3535.component';

describe('MyComp3535Component', () => {
  let component: MyComp3535Component;
  let fixture: ComponentFixture<MyComp3535Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3535Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3535Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
