import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3471Component } from './my-comp-3471.component';

describe('MyComp3471Component', () => {
  let component: MyComp3471Component;
  let fixture: ComponentFixture<MyComp3471Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3471Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3471Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
