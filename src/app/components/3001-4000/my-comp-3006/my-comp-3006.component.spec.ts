import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3006Component } from './my-comp-3006.component';

describe('MyComp3006Component', () => {
  let component: MyComp3006Component;
  let fixture: ComponentFixture<MyComp3006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
