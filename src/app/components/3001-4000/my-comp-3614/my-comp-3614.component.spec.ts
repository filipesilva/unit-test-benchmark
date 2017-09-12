import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3614Component } from './my-comp-3614.component';

describe('MyComp3614Component', () => {
  let component: MyComp3614Component;
  let fixture: ComponentFixture<MyComp3614Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3614Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3614Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
